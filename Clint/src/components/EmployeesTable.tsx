import { SimpleGrid } from "@chakra-ui/react";
import type { Employee } from "../Employee";
import EmployeeCard from "./EmployeeCard";

interface EmployeesTableProps {
    employees: Employee[];
    onDelete: (id: number) => void;
    onEdit: (employee: Employee) => void;
}

export default function EmployeesTable({ employees, onDelete, onEdit }: EmployeesTableProps) {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            {employees.map((emp) => (
                <EmployeeCard
                    key={emp.id}
                    employee={emp}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </SimpleGrid>
    );
}
