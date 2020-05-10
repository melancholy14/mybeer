import React from 'react';

type TabsProps = {
  data: { text: string; id: string }[];
  active: string;
  onSelect: (id: string) => void;
};

function Tabs({ data, active, onSelect }: TabsProps) {
  const onClick = (id: string) => () => {
    onSelect(id);
  };

  return (
    <ul className="tabs">
      {data.map(({ text, id }) => (
        <li
          key={id}
          className={`tab align-center ${id === active ? 'active' : ''}`}
          style={{ width: `${100 / data.length}%` }}
          onClick={onClick(id)}
        >
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
