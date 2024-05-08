import ReactTagInput from '@pathofdev/react-tag-input';
import {
  Button,
  Input,
  TableCell,
  TableContainer,
  TableHeader,
  Textarea,
  Table,
} from '@windmill/react-ui';
import Multiselect from 'multiselect-react-dropdown';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { MultiSelect } from 'react-multi-select-component';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiX } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

//internal import

import Title from '@/components/form/others/Title';
import Error from '@/components/form/others/Error';
import InputArea from '@/components/form/input/InputArea';
import useUtilsFunction from '@/hooks/useUtilsFunction';
import LabelArea from '@/components/form/selectOption/LabelArea';
import DrawerButton from '@/components/form/button/DrawerButton';
import InputValue from '@/components/form/input/InputValue';
import useBeSpokeSubmit from '@/hooks/useBeSpokeSubmit';
import ActiveButton from '@/components/form/button/ActiveButton';
import InputValueFive from '@/components/form/input/InputValueFive';
import Uploader from '@/components/image-uploader/Uploader';
import ParentCategory from '@/components/category/ParentCategory';
import UploaderThree from '@/components/image-uploader/UploaderThree';
import AttributeOptionTwo from '@/components/attribute/AttributeOptionTwo';
import AttributeListTable from '@/components/attribute/AttributeListTable';
import SwitchToggleForCombination from '@/components/form/switch/SwitchToggleForCombination';

//internal import

const BeSpokeDrawer = ({ id }) => {
  React.useEffect(() => {
    console.log(id, 'swapnilid');
  }, []);

  const { t } = useTranslation();

  const {
    register,
    onSubmit,
    errors,
    openModal,
    setImageUrl,
    handleSubmit,
    isCombination,
    // productId,
    onCloseModal,
    isSubmitting,
    tapValue,
    resetRefTwo,
    handleProductTap,
    setDefaultCategory,
    defaultCategory,
    handleSelectLanguage,
    slug,
    tag,
    setTag,
    values,
    language,
    variantTitle,
    attributes,
    attTitle,
    handleAddAtt,
    isBulkUpdate,
    globalSetting,
    setTapValue,
    attribue,
    setValues,
    variants,
    imageUrl,
    handleProductSlug,
    handleReferenceNumberSlug,
    handleSkuBarcode,
    selectedCategory,
    setSelectedCategory,
    // handleIsCombination,
    // handleEditVariant,
    // handleRemoveVariant,
    // handleClearVariant,
    // handleQuantityPrice,
    // handleSelectImage,
    // handleSelectInlineImage,
    // handleGenerateCombination,
  } = useBeSpokeSubmit(id);

  const { currency, showingTranslateValue } = useUtilsFunction();
  const [currentItem, setCurrentItem] = React.useState(0);
  const items = [
    {
      text: 'Item 1',
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      text: 'Item 2',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4_N4K62Dq93q_7mFB3KtAV3Qd0gaOxzlRA&usqp=CAU',
    },
    {
      text: 'Item 3',
      imageUrl:
        'https://img.freepik.com/premium-photo/simple-elegant-design-golden-diamond-ring-transparent-background-3d-rendering-white-background_887552-28542.jpg',
    },
    // Add more items as needed
  ];
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    swipeToSlide: true,
    width: '100%',
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  const nextItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  const prevItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        center
        closeIcon={
          <div className="absolute top-0 right-0 text-red-500  active:outline-none text-xl border-0">
            <FiX className="text-3xl" />
          </div>
        }
      >
        <div className="cursor-pointer">
          {/* <UploaderThree
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            handleSelectImage={handleSelectImage}
          /> */}
        </div>
      </Modal>

      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <Title
          register={register}
          handleSelectLanguage={handleSelectLanguage}
          title="Add Bespoke"
          description="Add your Bespoke and necessary information from here"
        />
      </div>

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            {/* <ActiveButton
              tapValue={tapValue}
              activeValue="Basic Info"
              handleProductTap={handleProductTap}
            /> */}
          </li>

          {/* {isCombination && (
            <li className="mr-2">
              <ActiveButton
                tapValue={tapValue}
                activeValue="Combination"
                handleProductTap={handleProductTap}
              />
            </li>
          )} */}
        </ul>
      </div>

      <Scrollbars className="track-horizontal thumb-horizontal w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="block" id="block">
          <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
            {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelArea label={t("ProductID")} />
                <div className="col-span-8 sm:col-span-4">{productId}</div>
              </div> */}
            {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Reference Number" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  {...register(`title`, {
                    required: 'TItle is required!',
                  })}
                  name="Reference Number"
                  type="text"
                  placeholder="Reference Number"
                  // onBlur={(e) => handleReferenceNumberSlug(e.target.value)}
                />
                <Error errorName={errors.title} />
              </div>
            </div> */}
            {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Category" />
              <div className="col-span-8 sm:col-span-4">
                <Multiselect
                  displayValue="name"
                  isObject={true}
                  singleSelect={true}
                  ref={resetRefTwo}
                  hidePlaceholder={true}
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={(v) => setDefaultCategory(v)}
                  selectedValues={defaultCategory}
                  options={[
                    { name: 'Solitare', id: 1 },
                    { name: 'Oval', id: 2 },
                  ]}
                  placeholder={'Category'}
                ></Multiselect>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Metal Purity" />
              <div className="col-span-8 sm:col-span-4">
                <Multiselect
                  displayValue="name"
                  isObject={true}
                  singleSelect={true}
                  ref={resetRefTwo}
                  hidePlaceholder={true}
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={(v) => setDefaultCategory(v)}
                  selectedValues={defaultCategory}
                  options={[
                    { name: 'Solitare', id: 1 },
                    { name: 'Oval', id: 2 },
                  ]}
                  placeholder="Metal Purity"
                ></Multiselect>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Finger Size" />
              <div className="col-span-8 sm:col-span-4">
                <Multiselect
                  displayValue="name"
                  isObject={true}
                  singleSelect={true}
                  ref={resetRefTwo}
                  hidePlaceholder={true}
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={(v) => setDefaultCategory(v)}
                  selectedValues={defaultCategory}
                  options={[
                    { name: 'One', id: 1 },
                    { name: 'Two', id: 2 },
                  ]}
                  placeholder="Finger Size"
                ></Multiselect>
              </div>
            </div>
            <div className="w-1/2">
              <Slider {...settings}>
                <div style={{}}>
                  <img
                    width={350}
                    height={350}
                    src={items[0].imageUrl}
                    alt="Carousel Item"
                  />
                </div>
                <div style={{ width: 200 }}>
                  <img
                    src={items[1].imageUrl}
                    width={250}
                    height={250}
                    alt="Carousel Item"
                  />
                </div>
                <div style={{ width: 75 }}>
                  <img
                    src={items[2].imageUrl}
                    width={250}
                    height={250}
                    alt="Carousel Item"
                  />
                </div>
                <div style={{ width: 300 }}>
                  <img
                    src={items[1].imageUrl}
                    width={250}
                    height={250}
                    alt="Carousel Item"
                  />
                </div>
                <div style={{ width: 225 }}>
                  <img
                    src={items[0].imageUrl}
                    width={250}
                    height={250}
                    alt="Carousel Item"
                  />
                </div>
                <div style={{ width: 175 }}>
                  <img
                    src={items[2].imageUrl}
                    width={250}
                    height={250}
                    alt="Carousel Item"
                  />
                </div>
              </Slider>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label={t('ProductImage')} />
              <div className="col-span-8 sm:col-span-4">
                <Uploader
                  product
                  folder="product"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                />
              </div>
            </div> */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Instruction" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  style={{ height: 200 }}
                  {...register(`title`, {
                    required: 'TItle is required!',
                  })}
                  name="Instruction"
                  type="text"
                  placeholder="Instruction"
                  onBlur={(e) => handleProductSlug(e.target.value)}
                />
                <Error errorName={errors.title} />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="Bespoke" isSubmitting={isSubmitting} />
        </form>
      </Scrollbars>
    </>
  );
};

export default React.memo(BeSpokeDrawer);
