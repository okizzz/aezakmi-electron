import { useMemo } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import queryString from "query-string";

const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // возвращаем наш объект роутера
  // запоминаем его для того, чтобы новый объект возвращался только при наличии изменений
  return useMemo(() => {
    return {
      // для удобства определяем push(), replace() и pathname на верхнем уровне
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // объединяем параметры и преобразуем строку запроса в простой объект "query"
      // для того, чтобы они были взаимозаменяемыми
      // пример: /:topic?sort=popular -> { topic: 'react', sort: 'popular' }
      query: {
        ...queryString.parse(location.search), // преобразуем строку в объект
        ...params,
      },
      // добавляем объекты "match", "location" и "history"
      // в качестве дополнительного функционала React Router
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
};

export default useRouter;
