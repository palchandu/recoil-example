import { atom,useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { useState,useEffect } from "react";
const { persistAtom } = recoilPersist();

export const textState = atom({
  key: "textState",
  default: "",
});

const defaultNum = 0;
export const incrementDecementState = atom({
  key: "incrementDecreementState",
  default: defaultNum,
  effects_UNSTABLE: [persistAtom],
});
export function useIncDecSSR() {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(incrementDecementState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultNum : value, setValue];
}