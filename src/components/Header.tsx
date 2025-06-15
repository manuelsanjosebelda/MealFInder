import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import type { SearchForm } from "../types";

type Props = {
  onSubmit: (data: SearchForm) => void;
};

const Header = ({ onSubmit }: Props) => {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container mt="1" maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoSearchSharp color="gray" />
          </InputLeftElement>
          <Input
            mr="2"
            focusBorderColor={
              !!formState.errors.search ? "crimson" : "blue.400"
            }
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="text"
            placeholder="Intenta con 'chicken' o 'beans'"
          />
          <Button color="white" type="submit" bg="blue.400">
            Buscar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
};

export default Header;
