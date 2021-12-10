export interface IBookInterface {
  id: string;
  isWished: boolean;
  volumeInfo: {
    [key: string]: any;
  };
}
