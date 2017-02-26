
export function updateCommand(state, commandText) {
  return {
      command: {
        type: state.command.type || "add",
        text: commandText
      }
  };
};

export function performCommand(state) {
  let result = {
    command: { text: "", type: "add" }
  };
  result.items = [ ...state.items, { text: state.command.text } ];
  /*
    TODO: Optimistically add the item, but trigger an API call to save the item on the server.

    Have different status options for an item:
    * read: read-only.
    * new: item can be changed, does not currently exist.
    * edit: item can be changed.
    * pending: read-only, saved on client, but out of sync with server.
    * saved: saved on client and server, read-only.
  */
  return result;
}
