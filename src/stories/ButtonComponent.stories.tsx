import React from "react";
import { Story, Meta } from '@storybook/react';
import { ButtonComponent, ButtonComponentProps } from "../components/button-component/ButtonComponent";

export default {
    title: 'Components / Button',
    component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponentProps> = args => <ButtonComponent {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'outlined',
    color: 'primary',
    onClick: () => {},
};