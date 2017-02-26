import { updateCommand, performCommand } from "./commands";

describe('commands services', () => {
  let before = {};

  beforeEach(() => {
    before = {
      command: {
        text: "before",
        type: "add"
      },
      items: [{ text: "first" }, { text: "second" }]
    };
  });

  describe('updateCommand', () => {

    test('updates command text', () => {
      const result = updateCommand(before, "after");
      expect(result.command.text).toBe("after");
    });

    test('leaves type alone', () => {
      const result = updateCommand(before, "after");
      expect(result.command.type).toBe(before.command.type);
    });

    test('sets type to "add" if not available', () => {
      before.command.type = undefined;
      const result = updateCommand(before, "after");
      expect(result.command.type).toBe("add");
    });
  });

  describe('performCommand', () => {

    test('resets command', () => {
      const result = performCommand(before);
      expect(result.command.text).toBe("");
      expect(result.command.type).toBe("add");
    });

    describe('add command', () => {

      test('appends command text to item list', () => {
        const result = performCommand(before);
        expect(result.items.length).toBe(3);
        expect(result.items[result.items.length - 1].text).toBe(before.command.text);
      });

    });

  });

});
