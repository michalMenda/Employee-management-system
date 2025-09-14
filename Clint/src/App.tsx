import { useState } from "react";
import EmployeesTable from "./components/EmployeesTable";
import type { Employee } from "./Employee";
import { Heading, Button, Box, Spinner, Text } from "@chakra-ui/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function App() {
  const queryClient = useQueryClient();

  const fetchEmployees = async (): Promise<Employee[]> => {
    const res = await fetch("http://localhost:3000/workers");
    if (!res.ok) throw new Error("Failed to fetch workers");
    return res.json();
  };

  const {
    data: employees = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Employee[], Error>({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  const addEmployeeMutation = useMutation({
    mutationFn: async (employee: Omit<Employee, "id">) => {
      const res = await fetch("http://localhost:3000/workers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const editEmployeeMutation = useMutation({
    mutationFn: async (employee: Employee) => {
      const res = await fetch(`http://localhost:3000/workers/${employee.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const deleteEmployeeMutation = useMutation({
    mutationFn: async (id: number) => {
      await fetch(`http://localhost:3000/workers/${id}`, { method: "DELETE" });
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const handleAdd = () => {
    addEmployeeMutation.mutate({ name: "New Employee", role: "Role", isActive: true });
  };

  const handleDelete = (id: number) => {
    deleteEmployeeMutation.mutate(id);
  };

  const handleEdit = (employee: Employee) => {
    editEmployeeMutation.mutate(employee);
  };

  if (isLoading) {
    return (
      <Box p={6} textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box p={6} textAlign="center">
        <Text color="red.500">Error: {error?.message}</Text>
        <Button mt={4} onClick={() => refetch()}>
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box p={6}>
      <Heading mb={4}>Employees</Heading>

      <Button colorScheme="brand" onClick={handleAdd} mr={2}>
        Add Employee
      </Button>
      <Button variant="outline" onClick={() => refetch()}>
        Refresh
      </Button>

      <EmployeesTable employees={employees} onDelete={handleDelete} onEdit={handleEdit} />
    </Box>
  );
}
