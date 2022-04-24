import { atom } from "jotai";

const userAtom = atom("");
const isAuthenticatedAtom = atom(false);
const peopleAtom = atom([]);
const userFriendsAtom = atom([]);

export { userAtom, isAuthenticatedAtom, peopleAtom, userFriendsAtom };
