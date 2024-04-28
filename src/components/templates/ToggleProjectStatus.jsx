import { Switch } from "@headlessui/react";
import { useState } from "react";

function ToggleProjectStatus({ project }) {
  const [enabled, setEnabled] = useState(project.status === "OPEN" ? true : false );

  return (
    <div>
      <Switch.Group>
        <div className="flex items-center gap-x-2">
          <Switch.Label className="">
            {project.status === "OPEN" ? "باز" : "بسته"}
          </Switch.Label>
          <Switch
            checked={enabled}
            onChange={setEnabled}
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
    </div>
  );
}

export default ToggleProjectStatus;
