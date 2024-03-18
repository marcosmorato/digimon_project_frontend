import React, { useEffect, useState } from "react";
import HeaderBox from "../../components/header";
import NavBox from "../../components/nav";
import WikipediaBox from "../../components/wikipedia";
import FilterBox from "../../components/filter";
import * as GS from "../../utils/globalStyles/styles";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IDigimonReducer } from "../../utils/interfaces/digimons/index";
import { useNavigate } from "react-router-dom";
import { resetUsers } from "../../store/user/actions";

import { wikipediaThunk } from "../../store/wikipedia/thunk";

const Wikipedia: React.FC = () => {
  const [showWikipedia, setShowWikipedia] = useState(false);
  const digimonsName = useSelector((state: RootState) => state.wikipedia);
  const [digimonFilters, setDigimonFilters] =
    useState<IDigimonReducer>(digimonsName);

  const user = useSelector((state: RootState) => state.user.loggedUser.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    setDigimonFilters(digimonsName);
  }, [digimonsName]);

  useEffect(() => {
    if (user.token !== "") {
      dispatch(wikipediaThunk(user.token, setShowWikipedia)).catch((error) => {
          console.log('Erro ao executar o thunk:', error);
          dispatch(resetUsers())
          navigate("/account")
        });
    } else {
      navigate("/account")
    }
  }, [dispatch, setShowWikipedia, user.token]);
  
  return (
    <GS.ContainerPage>
      <HeaderBox></HeaderBox>
      <GS.ContainerBody>
        <NavBox></NavBox>
          <WikipediaBox
            showWikipedia={showWikipedia}
            digimonsName={digimonFilters?.digimonsFilters || []}
            userToken={user.token}
            userFavorite={user.favorite}
          ></WikipediaBox>
        <FilterBox
          digimonsName={digimonsName.digimonsFilters || []}
          onSetDigimonFilter={setShowWikipedia}
          setDigimonFilters={setDigimonFilters}
        ></FilterBox>
      </GS.ContainerBody>
    </GS.ContainerPage>
  );
};

export default Wikipedia;
