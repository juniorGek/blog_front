import { Form, Upload } from 'antd';
import axios from 'axios';

//File Input Component
const UploadImage = (props) => {
    const { setImg } = props;
    let max = props.max || 1;
    let name = props.name || 'img';
    let label = props.label ;
    let listType = props.listType || 'picture-card';

    return (
        <div className='form-group'>
            <Form.Item
                name={name}
                label={label}
                rules={[
                    {
                        required: props?.required,
                        message: `Please upload ${!!label ? label : 'an image'}`,
                    },
                ]}
            >
                <Input max={max} setImg={setImg} listType={listType} noWebp={props?.noWebp} />
            </Form.Item>
        </div>
    );
};

const Input = ({ value, onChange, listType, max, noWebp, setImg }) => {
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = document.createElement('img');
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    const handleChange = ({ fileList }) => {
        onChange(fileList);
    };

    return (
        <Upload
            accept={`image/png, image/gif, image/jpeg, ${!noWebp && 'image/webp'} `}
            listType={listType}
            onPreview={onPreview}
            fileList={value || []}
            // handleChange={handleChange}
            onChange={handleChange}
            // onChange={(e) => {
            //     // handleChange();
            //     setImg(e?.file);
            // }}
            maxCount={max}
        >
            {(value?.length || 0) < max && '+ upload'}
        </Upload>
    );
};

export default UploadImage;

export const uploadImage = async (image) => {
    try {
        const data = new FormData();
        data.append('image', image);
        let url = `https://api.imgbb.com/1/upload?key=${process.env.imgbb_key}`;
        const res = await axios.post(url, data, {});
        if (res.data.success) {
            return res.data.data.image.url;
        }
    } catch (e) {
        return '';
    }
};

export const getUploadImageUrl = async (image) => {
    if (image?.length > 0) {
        if (image[0].uid === '-1') {
            return image[0].url;
        } else {
            let { originFileObj } = image[0];
            return await uploadImage(originFileObj);
        }
    }
    return '';
};

export const getUploadImagesUrl = async (images) => {
    if (images?.length > 0) {
        let urls = [];
        for (let i = 0; i < images?.length; i++) {
            if (+images[i].uid < 0) {
                urls.push(images[i].url);
            } else {
                let { originFileObj } = images[i];
                let url = await uploadImage(originFileObj);
                urls.push(url);
            }
        }
        return urls;
    }
    return [];
};
