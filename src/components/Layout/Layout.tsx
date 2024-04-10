import React from "react";
import { Flex } from "../Flex/Flex";
import PageMeta from "../PageMeta/PageMeta";
interface Props {
  children: React.ReactNode;
  subtitle?: string;
  align?: "center" | "start" | "end";
}
export const Layout = ({
  children,
  subtitle,
  align = "center",
}: Props): JSX.Element => {
  return (
    <>
      <div className="w-full min-h-full relative overflow-x-hidden overflow-y-auto">
        <PageMeta subtitle={subtitle} />
        <Flex className="w-full" justify="center" align={align}>
          <Flex className="h-full w-full" direction="col">
            {children}
          </Flex>
        </Flex>
        {/* {showFooter && <Footer />} */}
      </div>
    </>
  );
};
