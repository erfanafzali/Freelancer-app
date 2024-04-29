import { Switch } from "@headlessui/react";

function Toggle({  label, enabled, toggleHandler }) {
  return (
    <Switch.Group>
      <div className="flex items-center gap-x-2">
        <Switch.Label className="">
          {label}
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={toggleHandler}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors  `}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default Toggle;
