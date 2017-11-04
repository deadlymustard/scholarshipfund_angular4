for f in *
do
	echo "{"
	echo 	"small:'assets/img/pics/$f',
              	medium:'assets/img/pics/$f',
		big:'assets/img/pics/$f'"
	echo "},"
done
