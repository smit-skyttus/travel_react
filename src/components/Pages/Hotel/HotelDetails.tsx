import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import Carousel from "better-react-carousel";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import FormatCurrency from '../../helpers/FormatPrice'
//   import { HotelFooter } from "./HotelFooter";
import { useSelector } from "react-redux";

function HotelDetails({ person }: any) {
  const [singleHotel, setSingleHotel] = useState();
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  console.log(location.state)
;  // const { isAuth } = useSelector((store) => {
  //   console.log(store);
  //   return {
  //     isAuth: store.LoginReducer.isAuth,
  //   };
  // });

  useEffect(() =>{
     setSingleHotel(location.state);
     window.scrollTo(0, 0);
  },[])
  
    
  
 
  
  return (
    <>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Box >
              <Image
                rounded={"md"}
                alt={"product image"}
                src={location.state.hotelImage}
                height="400px"
                width="100%"
                paddingTop="50px"
              />
            </Box>

            <Stack spacing={{ base: 6, md: 10 }}>
              <Box bg="gray.100" p="5" borderRadius="5" textAlign="center">
                <Heading
                  lineHeight={1.1}
                  fontWeight={500}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {location.state.hotelName}
                </Heading>
                {/* <Text
                  bg="blue.100"
                  m="5"
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={500}
                  fontSize={"2xl"}
                >
                  Place : Delhi
                </Text> */}
              </Box>
              <HStack>
                <Box>
                  <Carousel cols={2} rows={1} gap={10} loop>
                    <Carousel.Item>
                      <img
                        width="100%"
                        height="200px"
                        src={location.state.hotelImage}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width="100%"
                        height="200px"
                        src={location.state.hotelImage}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width="100%"
                        height="200px"
                        src={location.state.hotelImage}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width="100%"
                        height="200px"
                        src={location.state.hotelImage}
                      />
                    </Carousel.Item>
                  </Carousel>
                </Box>
              </HStack>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    additional
                  </Text>
                  <Text fontSize={"lg"}>{location.state.hotelAddress}</Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>WiFi</ListItem>
                      <ListItem>Parking</ListItem>{" "}
                      <ListItem>Breakfast Included</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Laundry</ListItem>
                      <ListItem>Pick-up and drop</ListItem>
                      <ListItem>Early Check-In</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Price Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Base Price:
                      </Text>{" "}
                      {<FormatCurrency price={location.state.hotelPrice} />}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        for 2 adults:
                      </Text>{" "}
                      { <FormatCurrency price={location.state.hotelPrice} />}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Room:
                      </Text>{" "}
                      Steel
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Taxes & Fees
                      </Text>{" "}
                      ₹ 250
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Total:
                      </Text>{" "}
                      ₹ {location.state.hotelPrice + 250}
                    </ListItem>

                    <ListItem color="red">Non Refundable</ListItem>
                  </List>
                </Box>
              </Stack>

             
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={onOpen}
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  // color={useColorModeValue("white", "gray.900")}
                  borderRadius="5"
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Proceed to Payment
                </Button>
              

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Payment Successful</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Your payment has been successfully processed, and we are
                      grateful for your business. Our team is dedicated to
                      ensuring your satisfaction, and we will work hard to
                      exceed your expectations at every step of the way.
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <RouteLink to="/">
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </RouteLink>
                    <Button variant="ghost">Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>Thank You For Choosing us</Text>
              </Stack>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default HotelDetails;
