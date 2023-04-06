import { useRecoilValue } from "recoil";
import { selectModification } from "../atoms/userAtom";
import CheckPassword from "../components/profileModification/CheckPassword";

import ChooseInfo from "../components/profileModification/ChooseInfo";
import ModifyPassword from "../components/profileModification/ModifyPassword";
import ModifyProfile from "../components/profileModification/ModifyProfile";

function ProfileModification() {
  const selectModificationPage = useRecoilValue(selectModification);

  return (
    <div>
      {selectModificationPage === "select" && <ChooseInfo />}
      {selectModificationPage === "profile" && <ModifyProfile />}
      {selectModificationPage === "checkPassword" && <CheckPassword />}
      {selectModificationPage === "modifyPassword" && <ModifyPassword />}
    </div>
  );
}

export default ProfileModification;
