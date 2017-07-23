import * as React from 'react';
import * as classnames from 'classnames';

type ButtonProps = {
	label: string;
	type?: 'positive' | 'negative';
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}

const Button = (props: ButtonProps) => {
	const buttonClasses = classnames('Button', props.className, {
		'Button--positive': props.type && props.type === 'positive',
		'Button--negative': props.type && props.type === 'negative',
		'Button--disabled': !!props.disabled
	});

	if (!!props.disabled) {
		return (
			<div className={buttonClasses}>{props.label}</div>
		);
	}

	return (
		<div className={buttonClasses} onClick={props.onClick}>{props.label}</div>
	);
};

export default Button;
