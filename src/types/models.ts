export interface Space {
    name: string;
    localityName: string;
  }
  
  export interface Locality {
    name: string;
    address: string;
    cp: number;
    city: string;
    spaces: Space[];
  }