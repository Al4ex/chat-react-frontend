import { types } from "../../types/types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.usersLoads:
      return {
        ...state,
        users: action.payload,
      };
    case types.activeChat:
      if (state.chatActive == action.payload) return state;
      return {
        ...state,
        chatActive: action.payload._id,
        userSelect: action.payload,
      };
    case types.newMessage:
      if (
        state.chatActive == action.payload.from ||
        state.chatActive == action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
          msgSend: [!state.msgSend],
        };
      } else {
        return state;
      }
    case types.loadMessages:
      return {
        ...state,
        messages: [...action.payload],
      };
    default:
      return state;
  }
};
