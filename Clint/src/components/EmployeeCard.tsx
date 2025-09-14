import {
  Heading,
  Text,
  Badge,
  IconButton,
  HStack,
  VStack,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Avatar } from "./ui/avatar";
import { Card, CardHeader, CardBody } from "./ui/card";
import { Collapsible } from "./ui/collapsible";
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from "./ui/drawer";
import { Toast, useToast } from "./ui/toast";
import { useState } from "react";
import type { Employee } from "../Employee";

type Props = {
  employee: Employee;
  onDelete: (id: number) => void;
  onEdit: (employee: Employee) => void;
};

export default function EmployeeCard({ employee, onDelete, onEdit }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: employee.name,
    role: employee.role,
    isActive: employee.isActive,
  });
  const { toast, showToast, hideToast } = useToast();

  const handleSave = () => {
    onEdit({ ...employee, ...editForm });
    setIsDrawerOpen(false);
    showToast("Employee updated successfully!");
  };

  const handleEditClick = () => {
    setEditForm({
      name: employee.name,
      role: employee.role,
      isActive: employee.isActive,
    });
    setIsDrawerOpen(true);
  };

  return (
    <>
      <Card maxW="sm" mb={4}>
        <CardHeader>
          <HStack justify="space-between">
            <HStack gap={2}>
              <Avatar name={employee.name} />
              <Heading size="md">{employee.name}</Heading>
            </HStack>
            <IconButton
              aria-label="Expand/Collapse"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </IconButton>
          </HStack>
        </CardHeader>

        <Collapsible open={isOpen}>
          <CardBody>
            <VStack align="start" gap={3}>
              <Text><strong>Role:</strong> {employee.role}</Text>

              <Badge
                colorScheme={employee.isActive ? "green" : "red"}
                variant="solid"
              >
                {employee.isActive ? "Active" : "Inactive"}
              </Badge>

              <HStack gap={2} width="100%" justify="center">
                <IconButton
                  aria-label="Edit employee"
                  colorScheme="blue"
                  onClick={handleEditClick}
                  size="sm"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="Delete employee"
                  colorScheme="red"
                  onClick={() => onDelete(employee.id)}
                  size="sm"
                >
                  <DeleteIcon />
                </IconButton>
              </HStack>
            </VStack>
          </CardBody>
        </Collapsible>
      </Card>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} size="md">
        <DrawerHeader>
          <Heading size="lg">Edit Employee</Heading>
        </DrawerHeader>

        <DrawerBody>
          <VStack gap={4}>
            <Box width="100%">
              <Text mb={2} fontWeight="medium">Name</Text>
              <Input
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
            </Box>

            <Box width="100%">
              <Text mb={2} fontWeight="medium">Role</Text>
              <Input
                value={editForm.role}
                onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
              />
            </Box>

            <Box width="100%">
              <HStack justify="space-between">
                <Text fontWeight="medium">Active</Text>
                <input
                  type="checkbox"
                  checked={editForm.isActive}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditForm({ ...editForm, isActive: e.target.checked })
                  }
                />
              </HStack>
            </Box>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <HStack gap={3} width="100%" justify="center">
            <Button variant="outline" colorScheme="brand" onClick={() => setIsDrawerOpen(false)}>
              Cancel
            </Button>
            <Button colorScheme="brand" onClick={handleSave}>
              Save Changes
            </Button>
          </HStack>
        </DrawerFooter>
      </Drawer>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </>
  );
}
