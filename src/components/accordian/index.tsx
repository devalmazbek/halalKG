'use client';

import React from 'react';
import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';

export interface AccordionPanel {
  key: string;
  header: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps
  extends Omit<CollapseProps, 'items'> {
  panels: AccordionPanel[];
}

export const Accordion: React.FC<AccordionProps> = ({panels, defaultActiveKey = [], ghost = false, ...restProps}) => {

  const items: CollapseProps['items'] = panels.map(({ key, header, content }) => ({
    key,
    label: header,
    children: content,
  }));

  return (
    <Collapse
      defaultActiveKey={defaultActiveKey}
      ghost={ghost}
      items={items}
      {...restProps}
    />
  );
};
