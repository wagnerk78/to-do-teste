import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import ModalComp from "./Component/ModalComp";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ data, setData ] = useState([]);
  const[ dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const db_costumer = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (title) => {
    const newArray = data.filter((item) => item.title !== title);

    setData(newArray);

    localStorage.setItem("tasks", JSON.stringify(newArray));
  };

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
    >
      <Box maxW={800} w="50vw" h="100vh" py={50} px={20}>
        <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
          NOVA TAREFA
        </Button>

        <Box overflowY="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                <Th  fontSize="20px">
                 Título
                </Th>
                <Th  fontSize="20px">
                Descrição
                </Th>
                <Th  fontSize="20px">
                  Data
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ title, description, date }, index) => (
                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <Td >{title}</Td>
                  <Td>{description}</Td>
                  <Td >{date}</Td>
                  <Td p={0}>
                  <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({title, description, date, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={5}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(title)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default App;
