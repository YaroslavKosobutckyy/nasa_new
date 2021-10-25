import styled from 'styled-components';

const NavLink = styled.img``;
export const photoStyle = styled(NavLink)`    
      cursor:pointer;
      text-align: center;
      font-size:10em;
      border-radius:4px;
      border:1px solid #bbb;
      transition: all 0.3s linear;

      &:hover {
      -webkit-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
      -moz-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
      -o-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
      box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  }   
 `;

photoStyle.displayName = 'photoStyle';

export const BtnStyle = styled.div`
      margin-top: 10px;
      magrin-bottom: 30px;
 `;

BtnStyle.displayName = 'BtnStyle';

