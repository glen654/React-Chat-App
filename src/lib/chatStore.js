import { create } from 'zustand'
import { useUserStore } from "./userStore";


export const useChatStore = create((set) => ({
  chatId: null,
  user:null,
  isCurrentUserBlocked:false,
  isReceiverBlocked:false,
  changeChat: (chatId,user)=>{
    const currentUser = useUserStore.getState().currentUser

    //Check if the current user is blocked

    if(user.blocked.includes(currentUser.id)){
        return set({
            chatId,
            user:null,
            isCurrentUserBlocked:true,
            isReceiverBlocked:false,
        });
    }
    //Check if the receiver is blocked

    if(currentUser.blocked.includes(user.id)){
        return set({
            chatId,
            user:user,
            isCurrentUserBlocked:false,
            isReceiverBlocked:true,
        });
    }
  }
}))
