import React, { useState } from "react";
import AutoComplete from "../component/AutoComplete";
import Wrapper from "../component/common/Wrapper";
import PropType from "prop-types";

function AutoCompleteDemo({ options }) {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    const newList = options.filter((word) =>
      word.label.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(newList);
    setValue(value);
  };

  const onResetValue = (event) => {
    event.stopPropagation();

    setValue("");
    setSuggestions([]);
  };

  const onSuggestionClick = (event, label) => {
    event.stopPropagation();

    setValue(label);
    setSuggestions([]);
  };

  const onOutOfSuggestionsClick = () => {
    if (suggestions.length > 0) {
      setSuggestions([]);
    }
  };

  return (
    <Wrapper title={"AutoComplete"}>
      <AutoComplete
        value={value}
        onChange={onChange}
        suggestions={suggestions}
        onSuggestionClick={onSuggestionClick}
        onResetValue={onResetValue}
        onOutOfSuggestionsClick={onOutOfSuggestionsClick}
      />
    </Wrapper>
  );
}

AutoCompleteDemo.propTypes = {
  options: PropType.arrayOf(
    PropType.shape({
      label: PropType.string,
      year: PropType.number,
    })
  ).isRequired,
};

export default AutoCompleteDemo;
