import { Box } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  children?: React.ReactNode;
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxWidth={variant === "regular" ? "800px" : "400px"}
      w="100%"
      mt={8}
      mx={"auto"}
    >
      {children}
    </Box>
  );
};
