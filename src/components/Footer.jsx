import {Image, Box, Stack, Text,HStack, VStack } from "@chakra-ui/react";
import React from "react";
import vg from "../assets/profile.jpeg"


const Footer = () => {
  return (
    <Box
      bgColor={"#2DC6C0"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} color={'blackAlpha.900'}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            color={'blackAlpha.900'}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        {/* <HStack>
          <Image boxSize={"28"} mt={["4", "0"]} borderRadius={"50%"} src={vg} />
          <Image boxSize={"28"} mt={["4", "0"]} borderRadius={"50%"} src={vg} />
          <Image boxSize={"28"} mt={["4", "0"]} borderRadius={"50%"} src={vg} />

          <Text color={'blackAlpha.900'}>Our Founder</Text>
        </HStack> */}
      </Stack>
    </Box>
  );
};

export default Footer;
