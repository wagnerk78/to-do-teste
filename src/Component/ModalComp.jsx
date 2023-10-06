/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [title, setTitle] = useState(dataEdit.title || "");
  const [description, setDescription] = useState(dataEdit.description || "");
  const [date, setDate] = useState(dataEdit.date || "");

    const handleSave = () => {
        if (!title || !description) return;

    if (titleAlreadyExists()) {
      return alert("Tarefa já existe!");
    }
    
        if (Object.keys(dataEdit).length) {
            data[dataEdit.index] = { title, description, date };
        }


        const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { title, description, date }]
        : [...(data ? data : [])];
  
      localStorage.setItem("tasks", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    }

    const titleAlreadyExists = () => {
        if (dataEdit.title !== title && data?.length) {
          return data.find((item) => item.title === title);
        }
    
        return false;
      };
   


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tarefas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Título</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Descrição</FormLabel>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Data</FormLabel>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>Salvar</Button>
            <Button colorScheme="red"onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
