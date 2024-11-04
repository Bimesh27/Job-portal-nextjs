import { Button } from "./ui/button";
import { Input } from "./ui/input";

function CommonForm({
  action,
  buttonText,
  isBtnDisabled,
  btnType,
  formControls,
  formData,
  setFormData,
}) {
  
  function renderInputByComponentType(getCurrentControl: {
    componentType: string;
    diable: boolean;
    placeholder: string;
    name: string;
    id: string;
    label: string;
  }) {
    let content = null;

    switch (getCurrentControl.componentType) {
      case "input":
        content = (
          <div className="relative flex items-center mt-8">
            <Input
              type="text"
              disabled={getCurrentControl.diable}
              placeholder={getCurrentControl.placeholder}
              name={getCurrentControl.name}
              id={getCurrentControl.id}
              value={formData[getCurrentControl.name]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [getCurrentControl.name]: e.target.value,
                })
              }
              className="w-full rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus:ring-offset-0"
            />
          </div>
        );
        break;

      case "file":
        content = (
          <label
            htmlFor={getCurrentControl.name}
            className="flex bg-gray-100 items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer"
          >
            <h2>{getCurrentControl.label}</h2>
            <Input
              onChange={handleFileChange}
              id={getCurrentControl.name}
              type="file"
            />
          </label>
        );

      default:
        content = (
          <div className="relative flex items-center mt-8">
            <Input
              type="text"
              disabled={getCurrentControl.diable}
              placeholder={getCurrentControl.placeholder}
              name={getCurrentControl.name}
              id={getCurrentControl.id}
              value={formData[getCurrentControl.name]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [getCurrentControl.name]: e.target.value,
                })
              }
              className="w-full rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus:ring-offset-0"
            />
          </div>
        );
        break;
    }

    return content;
  }

  return (
    <form action={action}>
      {formControls.map((control) => renderInputByComponentType(control))}
      <div className="mt-6 w-full">
        <Button
          disabled={isBtnDisabled}
          type={btnType || "submit"}
          className="flex h-11 items-center justify-center px-5"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
export default CommonForm;
