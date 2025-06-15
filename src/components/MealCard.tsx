import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import type { Meal } from "../types";

type Props = {
  meal: Meal;
  openRecipe: () => void;
};

const MealCard = ({ meal, openRecipe }: Props) => {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />
        <Heading size="md" color="blue.400">
          <Text mt="4">{meal.strMeal}</Text>
        </Heading>
      </CardBody>
      <CardFooter pt="0">
        <Button onClick={openRecipe} color="white" bgColor="blue.400">
          Ver receta
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;
