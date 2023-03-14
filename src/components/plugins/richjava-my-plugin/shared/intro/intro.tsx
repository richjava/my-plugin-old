import styles from "./Intro.module.css";
import React from "react";

type Props = {
  type: string,
  content: {
    global: any;
  };
};

export const Intro: React.FC<Props> = (props) => {
  if (!props.type || !props.content) return null;
  const name: string = props.content.global ? `: ${props.content.global.name}` : '';
  const data: any = {
    theme: {
      heading: `Theme is ready${name}`,
      nextSteps: [
        "Design your theme's templates",
        "Push theme to Github, then import into Built.js Studio",
        "Create a site from the theme",
      ]
    },
    plugin: {
      heading: `Plugin is ready`,
      nextSteps: [
        "Design your plugin's templates",
        "Push plugin to Github, then import into Built.js Studio",
        "Add plugin to a theme",
      ]
    }
  }
  return (
    <div className={styles.intro}>
      <div className={styles.message}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_815_23)">
            <path
              d="M5.37353 16.0381C4.32073 17.0926 3.82293 18.5582 4.05019 19.9341C5.42619 20.1596 6.89096 19.6609 7.94453 18.6085C8.99733 17.554 9.49513 16.0884 9.26786 14.7125C7.89186 14.487 6.42709 14.9857 5.37353 16.0381Z"
              fill="#FCEA2B"
            />
            <path
              d="M10.6579 15.2801C10.5939 15.6021 10.436 15.8979 10.204 16.1303C10.091 16.2427 9.96247 16.3383 9.82227 16.4142C10.5431 17.4047 11.0749 18.5091 11.3873 19.6644C11.6237 19.4572 11.8509 19.2382 12.0679 19.0082C12.7058 18.3301 13.2509 17.5623 13.6851 16.7307C14.102 15.924 14.4101 15.0666 14.5998 14.1855C13.357 14.837 12.0092 15.2112 10.6579 15.2801Z"
              fill="#61B2E4"
            />
            <path
              d="M4.97473 11.9159C4.74473 12.1326 4.52566 12.3594 4.31836 12.5954C5.47443 12.9058 6.57989 13.4357 7.57183 14.1548C7.64729 14.0168 7.74196 13.8902 7.85299 13.7788C8.08463 13.5476 8.37936 13.39 8.70023 13.3255C8.77043 11.9753 9.14569 10.6289 9.79789 9.38752C9.79853 9.38629 9.79913 9.38506 9.79976 9.38379C8.91809 9.57336 8.06016 9.88139 7.25293 10.2983C6.42093 10.7326 5.65296 11.2779 4.97473 11.9159Z"
              fill="#92D3F5"
            />
            <path
              d="M11.6068 6.91573C9.86302 8.66596 8.81799 10.9702 8.69922 13.3267C9.24509 13.2161 9.81009 13.3861 10.2042 13.7795C10.5996 14.1751 10.7694 14.743 10.6562 15.2906C13.0147 15.1703 15.3202 14.1231 17.0702 12.3773C19.3075 10.1364 20.365 7.02166 19.8815 4.09766C19.3042 4.00343 18.7133 3.96836 18.1176 3.99296C15.7263 4.0905 13.3809 5.14343 11.6068 6.91573ZM15.0232 6.73936C15.6369 6.1256 16.6321 6.12543 17.2461 6.73896C17.2462 6.7391 17.2463 6.73923 17.2465 6.73936C17.8604 7.35293 17.8606 8.34786 17.2469 8.9616C17.2467 8.96173 17.2466 8.96186 17.2465 8.962C16.6325 9.57546 15.6373 9.57526 15.0236 8.96153C14.4097 8.348 14.4095 7.35313 15.0232 6.73936Z"
              fill="#EA5A47"
            />
            <path
              d="M8.8451 17.3457C8.55324 17.6734 8.2153 17.9613 7.8427 18.1996C6.67914 18.9405 5.2679 19.1444 4.02904 18.7506C3.9792 19.1494 3.98594 19.5478 4.04904 19.9338C5.42504 20.1592 6.8898 19.6606 7.94337 18.6082C8.31164 18.2371 8.6169 17.8096 8.8451 17.3457Z"
              fill="#F1B31C"
            />
            <path
              d="M8.73374 12.896C8.72274 13.0387 8.7151 13.1813 8.71094 13.3237C9.2533 13.2183 9.8126 13.3892 10.2034 13.7797C10.5987 14.1753 10.7686 14.7432 10.6554 15.2908C13.0137 15.1702 15.3189 14.1229 17.0687 12.3771C17.5664 11.8748 18.0109 11.3231 18.3936 10.7324C17.9445 11.1413 17.4585 11.5106 16.9426 11.8349C14.4234 13.4052 11.3781 13.7989 8.73374 12.896Z"
              fill="#D22F27"
            />
            <path
              d="M8.01222 16.1835C8.30232 16.0378 8.58575 15.8776 8.86225 15.7042C9.67668 15.1934 10.4214 14.5693 11.072 13.8524L11.073 13.8515C11.6997 13.1545 12.2312 12.3786 12.6506 11.5474C12.671 11.5073 12.6829 11.4634 12.6855 11.4185C11.5527 11.1674 7.73685 14.8355 8.01222 16.1835Z"
              fill="#61B2E4"
            />
            <path
              d="M16.1346 9.83056C15.0426 9.83056 14.1543 8.94253 14.1543 7.85083C14.1543 6.75913 15.0426 5.87109 16.1346 5.87109C17.2267 5.87109 18.115 6.75913 18.115 7.85083C18.115 8.94253 17.2267 9.83056 16.1346 9.83056ZM16.1346 6.53099C15.4067 6.53099 14.8144 7.12289 14.8144 7.85083C14.8144 8.57873 15.4067 9.17066 16.1346 9.17066C16.8626 9.17066 17.4549 8.57873 17.4549 7.85083C17.4549 7.12289 16.8626 6.53099 16.1346 6.53099Z"
              fill="black"
            />
            <path
              d="M6.8846 15.0215C6.32527 15.2576 5.81053 15.604 5.37357 16.0384C4.32087 17.0928 3.823 18.5582 4.05014 19.9341C5.42614 20.1595 6.89083 19.6609 7.94447 18.6085C8.37923 18.1717 8.726 17.6571 8.96237 17.0979"
              stroke="black"
              strokeWidth="1.949"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.97473 11.9169C4.74473 12.1336 4.52566 12.3603 4.31836 12.5963C5.47443 12.9068 6.57989 13.4367 7.57183 14.1558C7.64729 14.0178 7.74196 13.8912 7.85299 13.7798C8.08463 13.5486 8.37936 13.3909 8.70023 13.3265C8.77043 11.9763 9.14569 10.6299 9.79789 9.3885C9.79853 9.38727 9.79913 9.38603 9.79976 9.38477C8.91809 9.57433 8.06016 9.88237 7.25293 10.2992C6.42093 10.7336 5.65296 11.2789 4.97473 11.9169Z"
              stroke="black"
              strokeWidth="1.949"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6579 15.2801C10.5939 15.6021 10.436 15.8979 10.204 16.1303C10.091 16.2427 9.96247 16.3383 9.82227 16.4142C10.5431 17.4047 11.0749 18.5091 11.3873 19.6644C11.6237 19.4572 11.8509 19.2382 12.0679 19.0082C12.7058 18.3301 13.2509 17.5623 13.6851 16.7307C14.102 15.924 14.4101 15.0666 14.5998 14.1855C13.357 14.837 12.0092 15.2112 10.6579 15.2801Z"
              stroke="black"
              strokeWidth="1.949"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6099 14.4488C10.6998 14.7442 10.6934 15.0127 10.6556 15.2903C13.0142 15.1699 15.3199 14.1226 17.0699 12.3765C19.3068 10.136 20.3645 7.0222 19.8816 4.09854C16.9579 3.6197 13.8456 4.6792 11.6073 6.91547C9.86322 8.66577 8.81799 10.9701 8.69922 13.3268C9.01299 13.2632 9.33202 13.2954 9.62232 13.4064"
              stroke="black"
              strokeWidth="1.949"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.3572 11.3994C11.552 11.8055 10.7997 12.3203 10.1239 12.9275C9.42897 13.5579 8.82393 14.2794 8.32913 15.0679C8.16117 15.3356 8.00633 15.6103 7.86523 15.891"
              stroke="black"
              strokeWidth="1.949"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_815_23">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1>
          {data[props.type].heading}
          {props.content.global && <span>: {props.content.global.name}</span>}
        </h1>
      </div>

      <p>Next steps:</p>
      <ol>
        {data[props.type].nextSteps.map((step: string) => {
          return (<li>{step}</li>);
        })}
      </ol>
    </div>
  );

  return null;
};
