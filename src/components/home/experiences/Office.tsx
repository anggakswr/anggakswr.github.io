interface IOffice {
  sTitle: string;
  sTimeline: string;
  oCompany: {
    sLogo: string;
    sName: string;
    sLink: string;
    sCity: string;
  };
}

const Office = ({ oOffice }: { oOffice: IOffice }) => {
  const { sTitle, oCompany, sTimeline } = oOffice;

  return (
    <div className="relative">
      {/* red bg */}
      <div className="absolute inset-0 bg-red-700 -rotate-3" />

      <div className="relative z-10 bg-white">
        {/* bg (boxes decoration) */}
        <div className="absolute inset-0 pattern1" />

        {/* content */}
        <div className="relative z-10 text-black text-lg p-4 box-equal gap-x-6">
          {/* img */}
          <img
            src={`/img/experiences/${oCompany.sLogo}`}
            alt={oCompany.sName}
            width={50}
          />

          {/* texts */}
          <div className="flex-1">
            <p>{sTitle}</p>

            <div className="box-equal gap-x-2 text-gray-600">
              <a
                href={oCompany.sLink}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {oCompany.sName}
              </a>

              <p>&middot;</p>

              <p>{oCompany.sCity}</p>
            </div>

            <p>{sTimeline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
