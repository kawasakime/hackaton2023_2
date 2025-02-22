export interface MainScreenProps {}

export interface miniContainerProps {
  children: JSX.Element;
  width?: number | string;
  height?: number | string;
}

export interface SubjectHorizontalProps {
  img: any;
  title: string;
  pressHandler?: () => void;
  colorGradient: [string, string];
}
