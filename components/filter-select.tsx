"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type FilterSelectProps = {
  id?: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export function FilterSelect({
  id,
  label,
  options,
  value,
  onChange,
}: FilterSelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value) ?? options[0],
    [options, value],
  );

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      className={`filter-field ${open ? "filter-field--open" : ""}`}
      ref={rootRef}
    >
      <span className="filter-field__label" id={`${selectId}-label`}>
        {label}
      </span>
      <button
        aria-controls={`${selectId}-menu`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-labelledby={`${selectId}-label ${selectId}-value`}
        className="filter-select"
        id={selectId}
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="filter-select__value" id={`${selectId}-value`}>
          {selectedOption.label}
        </span>
        <span aria-hidden="true" className="filter-select__icon">
          ▾
        </span>
      </button>

      {open ? (
        <div className="filter-select__menu" id={`${selectId}-menu`} role="listbox">
          {options.map((option) => {
            const isActive = option.value === value;

            return (
              <button
                aria-selected={isActive}
                className={`filter-select__option ${
                  isActive ? "filter-select__option--active" : ""
                }`}
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                role="option"
                type="button"
              >
                <span>{option.label}</span>
                {isActive ? <span aria-hidden="true">선택</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

