export interface FooterContent {
  title: string;
  content: {
    image?: JSX.Element;
    textCombination?: {
      initiator: string;
      text: string;
    }[];
    text?: string;
  }[];
}