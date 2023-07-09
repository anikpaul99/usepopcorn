import { useEffect } from "react";

/**
 * will be executed when a certain key is pressed down
 * @param {string} key the key to be pressed down for a certain action (e.g. 'Enter')
 * @param {func} action a callback for an action when a certain key is pressed down (e.g. closing a component when pressed the 'Escape' key)
 * @author Anik Paul
 */
export function useKey(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [key, action]
  );
}
