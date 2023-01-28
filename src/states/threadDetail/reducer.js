import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return [''];
    case ActionType.ADD_THREAD_COMMANT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.concat([action.payload.commant]),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
