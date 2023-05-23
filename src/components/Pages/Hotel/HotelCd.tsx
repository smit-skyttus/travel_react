import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import '../../Styles/HotelLayout.css';

const HotelCd = () => {
  return (
    <div className="HotelCard">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        p="2"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://cdn.pixabay.com/photo/2023/05/18/18/54/meerkat-8003062_960_720.jpg"
          alt="Image Not Loading"
        />

        <Stack w="70%">
          <CardBody>
            <Box bg="blue.100" borderRadius="2" p="1px" w="100%">
              Rating : 2
            </Box>
            <Heading size="md">Hotel</Heading>
            <Text py="2">Delhi</Text>
            <Heading size="sm" bg="gray.100" p="1" borderRadius="5px">
              Description
            </Heading>
            <Box>
              <Text mt="2" color="green">
                addtional
              </Text>
            </Box>
          </CardBody>
        </Stack>
        <Stack bg="blue.100" borderRadius="5" w="25%">
          <CardBody m="auto">
            <Heading size="lg">₹ 5000</Heading>
            <Text size="sm">+ ₹ 250 Taxes & Fees</Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Book Now
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default HotelCd;
