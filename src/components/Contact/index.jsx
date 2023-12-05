import React from "react";
import styled from "styled-components";
const Contact = () =>{
    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container{
        margin-top: 6rem;
        text-align: center;

        .contact-form{
            max-width: 50rem;
            margin: auto;

            .conatact-inputs{
                display: flex;
                flex-direction: column;
                gap: 3rem;

                input[type="submit"]{
                    cursor: pointer;
                    transition: all 0.2s;

                    $:hover{
                        background-color: ${({ theme }) => theme.colors.white};
                        border: 1px solid ${({ theme }) => theme.colors.btn};
                        color: ${({ theme }) => theme.colors.btn};
                        transform: scale(0.9);
                        
                    }
                }
            }
        }
     }
    `;
    return(
        <Wrapper>
            <h2 className="commonheading">Feel Free To Contact Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.493166378093!2d73.80558399357908!3d18.5177559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9e53a05f9%3A0x2be5e8da02be693e!2sMIT%20World%20Peace%20University%20(MIT-WPU)!5e0!3m2!1sen!2sin!4v1701602640701!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="container">
            <div className="contact-form">
                <form action="#" method="POST" className="contact-inputs">
                    <input type="text" name="username" placeholder="Username" autoComplete="off" required/>
                    <input type="email" name="email" placeholder="Email" autoComplete="off" required/>
                    <textarea name="message" id="" cols="30" rows="10" autoComplete="off" required></textarea>
                    <input type="submit" value="send" />

                </form>
            </div>
        </div>
        </Wrapper>
    )
};

export default Contact;