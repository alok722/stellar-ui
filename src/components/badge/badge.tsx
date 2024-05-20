import { Component, h, Prop } from '@stencil/core';

export type BadgeType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export type BadgeProps = {
  text: string;
  variant?: BadgeType;
};

@Component({
  tag: 'stellar-badge',
  styleUrl: 'badge.css',
  shadow: true,
})
export class Badge implements BadgeProps {
  /** It defines text of the badge */
  @Prop() text!: string;
  /** It defines type of the badge */
  @Prop() variant: BadgeType = 'default';

  render() {
    return <span class={`badge ${this.variant}`}>{this.text}</span>;
  }
}
