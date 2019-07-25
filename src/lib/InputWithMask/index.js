import React, {useState} from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import styled from 'styled-components'
import Wrapper from '../Wrapper'

const StyledInput = styled.input`
    max-width: 24rem;
    width: 100%;
    color: ${props => props.color ? props.color : '#222'};
    position: relative;
    padding: .4rem;
    box-sizing:  border-box;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#f2f2f2'};
    border: ${props => props.border ? props.border : '2px solid transparent'};
    border-bottom: ${props => props.borderBottom ? props.borderBottom : '2px solid #ababab'};
    border-radius: ${props => props.borderRaduis ? props.borderRaduis : '0'};
    touch-action: manipulation;
    :focus {
        outline: ${props => props.outline ? props.outline : "2px solid #1d29b947"};
    }
    :focus + span {
        font-size: .9rem;
        top: -.55rem;
    }
`

const Label = styled.label`
    opacity: 1;
    position: absolute;
    left: .4rem;
    font-size: 1rem;
    top: ${props => props.value ? "-.55rem" : "50%"};
    transform: translateY(-50%);
    color: #767676;
    transition: opacity .2s linear,font-size .1s linear,top .1s linear;
`
const InputError = styled.span`
    position: absolute;
    bottom: -1.4rem;
    left: 1.2rem;
    font-size: .875rem;
    color: #e01626;
    opacity: 1;
    visibility: visible;
    ::before {
        position: absolute;
        content: '!';
        color: #fff;
        line-height: .8rem;
        font-size: .75rem;
        text-align: center;
        width: .8rem;
        height: .8rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: -1.2rem;
        background-color: #e01626;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
`

const InputWithMask = ({label, onChange, initialValue="", mask="", invalid=false, errorText="",...rest}) => {
    const [value, setValue] = useState(initialValue);
    const changeHandler = (e) => {
        const val = e.target.value
        setValue(val)
        onChange(val)
    }

    return (
        <Wrapper>
            <InputMask
                mask={mask}
                value={value}
                onChange={changeHandler}
                {...rest}
            >
                {(props) => <StyledInput {...props} />}
            </InputMask>
            {label && <Label value={value}>{label}</Label>}
            {invalid && <InputError>{errorText}</InputError>}
        </Wrapper>
    )
}

InputWithMask.propTypes = {
    invalid: PropTypes.bool,
    mask: PropTypes.string,
    label: PropTypes.string,
    errorText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.string,
    borderBottom: PropTypes.string,
    borderRaduis: PropTypes.string,
    border: PropTypes.string,
    color: PropTypes.string
}

export {InputWithMask}