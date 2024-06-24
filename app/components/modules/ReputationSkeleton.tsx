import style from '@/styles/reputation.module.scss';

const ReputationSkeleton = () => {
  <>
    {Array.from(new Array(8)).map((_, index) => (
      <tr key={index}>
          {Array.from(new Array(3)).map((_, index) => (
            <th key={index} className={style.tg_cly1}>
              <div className={style.line} />
            </th>
          ))}
      </tr>
    ))}
  </>
}

export default ReputationSkeleton;