import { IProfile } from "./profile.interface";

export interface IProps {
  profiles: IProfile[];
  // eslint-disable-next-line no-unused-vars
  title: string;
  updateProfiles: (e: IProfile) => void;
}
