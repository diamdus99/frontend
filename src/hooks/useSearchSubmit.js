import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

//internal import
import { SidebarContext } from '@/context/SidebarContext';
import CategoryServices from '@/services/CategoryServices';
import { notifyError, notifySuccess } from '@/utils/toast';
import useTranslationValue from './useTranslationValue';

const useSearchSubmit = (id, data, carat) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate, lang } =
    useContext(SidebarContext);
  const [resData, setResData] = useState({});
  const [checked, setChecked] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [children, setChildren] = useState([]);
  const [language, setLanguage] = useState(lang);
  const [published, setPublished] = useState(true);
  const [selectCategoryName, setSelectCategoryName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNaturalDiamon, setisNaturalDiamon] = useState(true);

  const { handlerTextTranslateHandler } = useTranslationValue();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  // console.log("lang", lang, language);

  // console.log("resData", resData);

  // const onSubmit = async ({ name, description }) => {
  //   console.log('onSubmit', name, description);
  // };

  const naturalDiamonFunction = (e) => {
    console.log('setisNaturalDiamonFunction', e);
  };
  const onSubmit = async (tt) => {
    console.log('isNaturalDiamon', id, data, carat);
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    if (Object.keys(resData).length > 0) {
      setValue('name', resData.name[lang ? lang : 'en']);
      setValue('description', resData.description[lang ? lang : 'en']);
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setResData({});
      setValue('name');
      setValue('parentId');
      setValue('parentName');
      setValue('description');
      setValue('icon');
      setImageUrl('');
      setPublished(true);
      clearErrors('name');
      clearErrors('parentId');
      clearErrors('parentName');
      clearErrors('description');
      setSelectCategoryName('Home');
      setLanguage(lang);
      setValue('language', language);

      if (data !== undefined && data[0]?._id !== undefined) {
        setChecked(data[0]._id);
      }
      return;
    }
    if (id) {
      (async () => {
        try {
          const res = await CategoryServices.getCategoryById(id);
          // console.log("res category", res);

          if (res) {
            setResData(res);
            setValue('name', res.name[language ? language : 'en']);
            setValue(
              'description',
              res.description[language ? language : 'en']
            );
            setValue('language', language);
            setValue('parentId', res.parentId);
            setValue('parentName', res.parentName);
            setSelectCategoryName(res.parentName);
            setChecked(res.parentId);
            setImageUrl(res.icon);
            setPublished(res.status === 'show' ? true : false);
          }
        } catch (err) {
          notifyError(err ? err.response.data.message : err.message);
        }
      })();
    }
  }, [id, setValue, isDrawerOpen, language, clearErrors, data, lang]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    children,
    setChildren,
    published,
    setPublished,
    checked,
    setChecked,
    isSubmitting,
    selectCategoryName,
    setSelectCategoryName,
    handleSelectLanguage,
    setisNaturalDiamon,
    naturalDiamonFunction,
  };
};

export default useSearchSubmit;
