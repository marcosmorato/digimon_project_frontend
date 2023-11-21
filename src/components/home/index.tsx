import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as S from "./styles";
import * as GS from "../globalStyles";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { updateFavoriteThunk } from "../../store/user/thunk";

const HomeBox: React.FC = () => {
  const userRedux = useSelector(
    (state: RootState) => state.user.loggedUser.user
  );

  return (
    <GS.ContainerExtra>
      <GS.TitleBox variant="h3">Informações</GS.TitleBox>
      <S.InfoContainer>
        <S.DescriptionText variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt molestie odio vel tempor. Duis maximus ac sapien et sodales. Nunc in sem non libero dictum pharetra. Donec viverra justo a elit mattis ornare. Nullam in auctor enim. Nam vitae mattis magna, in mollis diam. Cras mauris eros, gravida nec convallis sit amet, dapibus et tellus. Quisque tempor purus justo, non consectetur orci sagittis a. Fusce maximus tristique feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rutrum justo risus, vitae scelerisque diam imperdiet vulputate. Vivamus bibendum hendrerit quam ut aliquam. Ut sagittis aliquet nisl nec imperdiet. Ut dui nisl, lacinia sit amet odio non, vehicula aliquam turpis. Integer vitae efficitur orci. Vestibulum vel ligula eget dui lobortis eleifend vel vitae libero.
        <br></br>
        Mauris lacinia nunc eu pellentesque vehicula. Fusce malesuada sem turpis, at fringilla leo tincidunt sed. Sed sodales, est vitae venenatis pulvinar, mi elit mollis nulla, non sagittis leo nibh ut urna. Nunc fringilla porta consequat. Pellentesque vitae luctus metus, vel tempor sapien. Nunc facilisis aliquet nunc, eget accumsan mi posuere a. Sed vitae eleifend enim. Integer quis semper mi. Suspendisse sollicitudin ante id nisi vulputate mollis. Sed eget mattis quam. In condimentum tempus maximus. Nunc pharetra sit amet tellus at imperdiet. Sed consequat orci justo, viverra venenatis arcu fringilla vel. Pellentesque facilisis elit a magna convallis, nec venenatis diam eleifend. Fusce feugiat accumsan urna a iaculis.
        <br></br>
        Aliquam ac ipsum sed nunc ornare suscipit. Nulla at enim sit amet urna tincidunt rhoncus quis ac libero. Ut volutpat lacus eget pharetra imperdiet. Duis pulvinar leo vitae nisi dapibus, in tincidunt nisl euismod. Vivamus facilisis gravida fringilla. Phasellus eu ex efficitur, laoreet magna in, egestas nibh. Nunc ullamcorper lacinia mi, ut dictum magna pulvinar in. Mauris placerat leo nunc, nec aliquam quam volutpat sed. Maecenas magna massa, blandit id aliquam in, pharetra eget lacus. Quisque at nisl quis ex tristique pellentesque. Vivamus vitae enim pharetra, dignissim ligula eget, imperdiet eros. Proin id lectus congue, dictum ante eu, hendrerit sapien. Sed urna dui, mattis ut ex et, facilisis cursus est. Ut vel condimentum orci. Curabitur ultricies posuere finibus. Vestibulum sollicitudin elit nec facilisis pretium.
        </S.DescriptionText>
        <S.DescriptionText variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt molestie odio vel tempor. Duis maximus ac sapien et sodales. Nunc in sem non libero dictum pharetra. Donec viverra justo a elit mattis ornare. Nullam in auctor enim. Nam vitae mattis magna, in mollis diam. Cras mauris eros, gravida nec convallis sit amet, dapibus et tellus. Quisque tempor purus justo, non consectetur orci sagittis a. Fusce maximus tristique feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla rutrum justo risus, vitae scelerisque diam imperdiet vulputate. Vivamus bibendum hendrerit quam ut aliquam. Ut sagittis aliquet nisl nec imperdiet. Ut dui nisl, lacinia sit amet odio non, vehicula aliquam turpis. Integer vitae efficitur orci. Vestibulum vel ligula eget dui lobortis eleifend vel vitae libero.
        <br></br>
        Mauris lacinia nunc eu pellentesque vehicula. Fusce malesuada sem turpis, at fringilla leo tincidunt sed. Sed sodales, est vitae venenatis pulvinar, mi elit mollis nulla, non sagittis leo nibh ut urna. Nunc fringilla porta consequat. Pellentesque vitae luctus metus, vel tempor sapien. Nunc facilisis aliquet nunc, eget accumsan mi posuere a. Sed vitae eleifend enim. Integer quis semper mi. Suspendisse sollicitudin ante id nisi vulputate mollis. Sed eget mattis quam. In condimentum tempus maximus. Nunc pharetra sit amet tellus at imperdiet. Sed consequat orci justo, viverra venenatis arcu fringilla vel. Pellentesque facilisis elit a magna convallis, nec venenatis diam eleifend. Fusce feugiat accumsan urna a iaculis.
        <br></br>
        Aliquam ac ipsum sed nunc ornare suscipit. Nulla at enim sit amet urna tincidunt rhoncus quis ac libero. Ut volutpat lacus eget pharetra imperdiet. Duis pulvinar leo vitae nisi dapibus, in tincidunt nisl euismod. Vivamus facilisis gravida fringilla. Phasellus eu ex efficitur, laoreet magna in, egestas nibh. Nunc ullamcorper lacinia mi, ut dictum magna pulvinar in. Mauris placerat leo nunc, nec aliquam quam volutpat sed. Maecenas magna massa, blandit id aliquam in, pharetra eget lacus. Quisque at nisl quis ex tristique pellentesque. Vivamus vitae enim pharetra, dignissim ligula eget, imperdiet eros. Proin id lectus congue, dictum ante eu, hendrerit sapien. Sed urna dui, mattis ut ex et, facilisis cursus est. Ut vel condimentum orci. Curabitur ultricies posuere finibus. Vestibulum sollicitudin elit nec facilisis pretium.
        </S.DescriptionText>
      </S.InfoContainer>
    </GS.ContainerExtra>
  );
};

export default HomeBox;
