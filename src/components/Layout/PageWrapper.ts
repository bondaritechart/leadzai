import styled from "@emotion/styled";
import {Flex} from "src/components/Layout/Flex";

export const PageWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 4.8rem;
  gap: 2.4rem;
  @media (max-width: 768px) {
    gap: 1.6rem;
    padding: 2.4rem;
  }
`