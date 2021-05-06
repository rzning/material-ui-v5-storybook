import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@material-ui/core'

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['inherit', 'primary', 'secondary'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: {
        type: 'inline-radio'
      }
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: {
        type: 'inline-radio'
      }
    }
  },
  args: {
    size: 'medium'
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const Contained = Template.bind({ label: 'Contained' })
Contained.args = {
  variant: 'contained',
  color: 'primary',
  disabled: false
}
