import React from 'react';

import { Meta, StoryObj } from "@storybook/react";

import CommandOutput from './CommandOutput';
import { ExecutionStatus } from '@nstaldev/react-core';

export default {
  title: 'CommandOutput',
  component: CommandOutput,
  argTypes: {},
} as Meta;

type Story = StoryObj<typeof CommandOutput>;

export const Default: Story = {
  args: {
    output: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum. Senectus et netus et malesuada fames. Mauris pharetra et ultrices neque. Sed augue lacus viverra vitae. Pulvinar pellentesque habitant morbi tristique senectus. Dui ut ornare lectus sit amet est placerat in. Ut eu sem integer vitae justo. Elementum tempus egestas sed sed. Hac habitasse platea dictumst quisque sagittis purus sit. Pulvinar elementum integer enim neque volutpat ac. Pretium quam vulputate dignissim suspendisse in. Molestie a iaculis at erat pellentesque. Vitae aliquet nec ullamcorper sit amet risus. Accumsan in nisl nisi scelerisque eu. Massa tincidunt nunc pulvinar sapien et ligula. Et malesuada fames ac turpis egestas maecenas pharetra. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Aliquet enim tortor at auctor urna nunc id.
Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Diam quis enim lobortis scelerisque fermentum. Sed risus pretium quam vulputate dignissim suspendisse. Elit at imperdiet dui accumsan. At tellus at urna condimentum mattis. Massa vitae tortor condimentum lacinia quis vel. Adipiscing elit pellentesque habitant morbi tristique. Elit pellentesque habitant morbi tristique. Sit amet aliquam id diam maecenas ultricies. At lectus urna duis convallis convallis tellus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Feugiat nibh sed pulvinar proin. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet aliquam id diam maecenas ultricies mi eget. Suspendisse potenti nullam ac tortor. Pellentesque sit amet porttitor eget dolor morbi non arcu. Morbi leo urna molestie at.    
Id eu nisl nunc mi ipsum faucibus. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Erat imperdiet sed euismod nisi porta lorem mollis. At ultrices mi tempus imperdiet. Suspendisse sed nisi lacus sed viverra tellus. Id donec ultrices tincidunt arcu non sodales neque sodales. Cras adipiscing enim eu turpis egestas pretium. Proin fermentum leo vel orci porta. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Nisi vitae suscipit tellus mauris. Viverra vitae congue eu consequat ac felis donec et. Ante metus dictum at tempor commodo ullamcorper.
Pulvinar neque laoreet suspendisse interdum consectetur. A lacus vestibulum sed arcu non odio euismod lacinia at. Volutpat ac tincidunt vitae semper quis lectus. Mattis ullamcorper velit sed ullamcorper morbi. Sapien pellentesque habitant morbi tristique. Ut aliquam purus sit amet luctus venenatis lectus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Aliquam id diam maecenas ultricies mi. Libero id faucibus nisl tincidunt eget. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Gravida in fermentum et sollicitudin ac orci.    
Nec feugiat nisl pretium fusce id velit. Ut placerat orci nulla pellentesque dignissim. Arcu felis bibendum ut tristique et. Dolor morbi non arcu risus quis varius. Laoreet non curabitur gravida arcu ac tortor. Sed turpis tincidunt id aliquet risus feugiat. Mauris pharetra et ultrices neque ornare. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Scelerisque in dictum non consectetur a erat nam at. Vitae turpis massa sed elementum tempus egestas sed sed. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Auctor elit sed vulputate mi sit amet mauris commodo. Et leo duis ut diam quam nulla porttitor. Natoque penatibus et magnis dis parturient montes nascetur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum. Senectus et netus et malesuada fames. Mauris pharetra et ultrices neque. Sed augue lacus viverra vitae. Pulvinar pellentesque habitant morbi tristique senectus. Dui ut ornare lectus sit amet est placerat in. Ut eu sem integer vitae justo. Elementum tempus egestas sed sed. Hac habitasse platea dictumst quisque sagittis purus sit. Pulvinar elementum integer enim neque volutpat ac. Pretium quam vulputate dignissim suspendisse in. Molestie a iaculis at erat pellentesque. Vitae aliquet nec ullamcorper sit amet risus. Accumsan in nisl nisi scelerisque eu. Massa tincidunt nunc pulvinar sapien et ligula. Et malesuada fames ac turpis egestas maecenas pharetra. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Aliquet enim tortor at auctor urna nunc id.
Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Diam quis enim lobortis scelerisque fermentum. Sed risus pretium quam vulputate dignissim suspendisse. Elit at imperdiet dui accumsan. At tellus at urna condimentum mattis. Massa vitae tortor condimentum lacinia quis vel. Adipiscing elit pellentesque habitant morbi tristique. Elit pellentesque habitant morbi tristique. Sit amet aliquam id diam maecenas ultricies. At lectus urna duis convallis convallis tellus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Feugiat nibh sed pulvinar proin. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet aliquam id diam maecenas ultricies mi eget. Suspendisse potenti nullam ac tortor. Pellentesque sit amet porttitor eget dolor morbi non arcu. Morbi leo urna molestie at.    
Id eu nisl nunc mi ipsum faucibus. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Erat imperdiet sed euismod nisi porta lorem mollis. At ultrices mi tempus imperdiet. Suspendisse sed nisi lacus sed viverra tellus. Id donec ultrices tincidunt arcu non sodales neque sodales. Cras adipiscing enim eu turpis egestas pretium. Proin fermentum leo vel orci porta. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Nisi vitae suscipit tellus mauris. Viverra vitae congue eu consequat ac felis donec et. Ante metus dictum at tempor commodo ullamcorper.
Pulvinar neque laoreet suspendisse interdum consectetur. A lacus vestibulum sed arcu non odio euismod lacinia at. Volutpat ac tincidunt vitae semper quis lectus. Mattis ullamcorper velit sed ullamcorper morbi. Sapien pellentesque habitant morbi tristique. Ut aliquam purus sit amet luctus venenatis lectus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Aliquam id diam maecenas ultricies mi. Libero id faucibus nisl tincidunt eget. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Gravida in fermentum et sollicitudin ac orci.    
Nec feugiat nisl pretium fusce id velit. Ut placerat orci nulla pellentesque dignissim. Arcu felis bibendum ut tristique et. Dolor morbi non arcu risus quis varius. Laoreet non curabitur gravida arcu ac tortor. Sed turpis tincidunt id aliquet risus feugiat. Mauris pharetra et ultrices neque ornare. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Scelerisque in dictum non consectetur a erat nam at. Vitae turpis massa sed elementum tempus egestas sed sed. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Auctor elit sed vulputate mi sit amet mauris commodo. Et leo duis ut diam quam nulla porttitor. Natoque penatibus et magnis dis parturient montes nascetur.`
  }
};