import React from 'react';



// Key Mechanics Explained
// placeholder=" " (Single Space): Enables the CSS pseudo-class :placeholder-shown. When the input is empty, the browser considers the placeholder "visible."

// peer Utility: Adding peer to the <input> allows sibling elements (the <label>) to style themselves based on the input's state using peer-focus: and peer-placeholder-shown:.

// pointer-events-none: Prevents the label from blocking mouse clicks, allowing user clicks on the text to pass directly through to the input element.

// Label Movement Logic:

// Empty & Unfocused: peer-placeholder-shown forces the label down to top-3.5 with text-sm, mimicking standard placeholder text.

// Focused or Filled: When the user clicks (peer-focus) or enters text (removing the placeholder state), the default styles kick in—moving the label to top-1.5 with a smaller text-[10px].

const FloatingInput = ({ label, type = "text", name, value, onChange, required = false }) => {
  return (
    <div className="relative rounded-xl border border-[#363639] bg-transparent focus-within:border-[#AAAFB5] transition-colors">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" " /* Single space required for :placeholder-shown trick */
        className="peer w-full rounded-xl bg-transparent px-3 pb-2 pt-5 text-sm text-[#f2f4f6] outline-none placeholder-transparent"
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-3 top-1.5 text-[10px] text-[#97A2AB] transition-all duration-150 ease-out
                   peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#6F7176]
                   peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#AAAFB5]"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;