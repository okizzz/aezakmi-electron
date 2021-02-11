import { IProfile } from "./profile.interface";

export interface IProps extends IProfile {
  profiles: Array<IProfile>;
  // eslint-disable-next-line no-unused-vars
  title: string;
  updateProfiles: (e: any) => void;
}
